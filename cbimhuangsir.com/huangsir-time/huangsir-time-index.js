$(document).ready(function() {
		setInterval(function() {
			var tempo = new Date();
			var segundos = tempo.getSeconds();
			var minutos = tempo.getMinutes();
			var horas = tempo.getHours();



			/* if(horas >= 12) {
				document.getElementById('AMorPM').innerHTML = "PM";
			} else {
				document.getElementById('AMorPM').innerHTML = "AM";
			} */

			if(horas > 12) {
				horas = horas - 12;
			}



			if(horas >= 0) {
				$('#hour_ones_top').removeClass('one_top3');
				$('#hour_ones_bottom').removeClass('one_bottom3');
				$('#hour_ones_top').addClass('zero_top3');
				$('#hour_ones_bottom').addClass('zero_bottom3');
			}


			if(horas >= 10) {
				$('#hour_ones_top').removeClass('zero_top3');
				$('#hour_ones_bottom').removeClass('zero_bottom3');
				$('#hour_ones_top').addClass('one_top3');
				$('#hour_ones_bottom').addClass('one_bottom3');
			}

			
			if(horas == 0 || horas == 10) {
				$('#hour_tens_top').removeClass('nine_top3');
				$('#hour_tens_bottom').removeClass('nine_bottom3');
				$('#hour_tens_top').addClass('zero_top3');
				$('#hour_tens_bottom').addClass('zero_bottom3');
			}

			if(horas == 1 || horas == 11) {
				$('#hour_tens_top').removeClass('zero_top3');
				$('#hour_tens_bottom').removeClass('zero_bottom3');
				$('#hour_tens_top').addClass('one_top3');
				$('#hour_tens_bottom').addClass('one_bottom3');
			}

			if(horas == 2 || horas == 12) {
				$('#hour_tens_top').removeClass('one_top3');
				$('#hour_tens_bottom').removeClass('one_bottom3');
				$('#hour_tens_top').addClass('two_top3');
				$('#hour_tens_bottom').addClass('two_bottom3');
			}
			
			if(horas == 3) {
				$('#hour_tens_top').removeClass('two_top3');
				$('#hour_tens_bottom').removeClass('two_bottom3');
				$('#hour_tens_top').addClass('three_top3');
				$('#hour_tens_bottom').addClass('three_bottom3');
			}
			
			if(horas == 4) {
				$('#hour_tens_top').removeClass('three_top3');
				$('#hour_tens_bottom').removeClass('three_bottom3');
				$('#hour_tens_top').addClass('four_top3');
				$('#hour_tens_bottom').addClass('four_bottom3');
			}
			
			if(horas == 5) {
				$('#hour_tens_top').removeClass('four_top3');
				$('#hour_tens_bottom').removeClass('four_bottom3');
				$('#hour_tens_top').addClass('five_top3');
				$('#hour_tens_bottom').addClass('five_bottom3');
			}
			
			if(horas == 6) {
				$('#hour_tens_top').removeClass('five_top3');
				$('#hour_tens_bottom').removeClass('five_bottom3');
				$('#hour_tens_top').addClass('six_top3');
				$('#hour_tens_bottom').addClass('six_bottom3');
			}
			
			if(horas == 7) {
				$('#hour_tens_top').removeClass('six_top3');
				$('#hour_tens_bottom').removeClass('six_bottom3');
				$('#hour_tens_top').addClass('seven_top3');
				$('#hour_tens_bottom').addClass('seven_bottom3');
			}
			
			if(horas == 8) {
				$('#hour_tens_top').removeClass('seven_top3');
				$('#hour_tens_bottom').removeClass('seven_bottom3');
				$('#hour_tens_top').addClass('eight_top3');
				$('#hour_tens_bottom').addClass('eight_bottom3');
			}

			if(horas == 9) {
				$('#hour_tens_top').removeClass('eight_top3');
				$('#hour_tens_bottom').removeClass('eight_bottom3');
				$('#hour_tens_top').addClass('nine_top3');
				$('#hour_tens_bottom').addClass('nine_bottom3');
			}



			
			if(minutos >= 0) {
				$('#minute_ones_top').removeClass('five_top2');
				$('#minute_ones_bottom').removeClass('five_bottom2');
				$('#minute_ones_top').addClass('zero_top2');
				$('#minute_ones_bottom').addClass('zero_bottom2');
			}

			
			if(minutos >= 10) {
				$('#minute_ones_top').removeClass('zero_top2');
				$('#minute_ones_bottom').removeClass('zero_bottom2');
				$('#minute_ones_top').addClass('one_top2');
				$('#minute_ones_bottom').addClass('one_bottom2');
			}
			
			if(minutos >= 20) {
				$('#minute_ones_top').removeClass('one_top2');
				$('#minute_ones_bottom').removeClass('one_bottom2');
				$('#minute_ones_top').addClass('two_top2');
				$('#minute_ones_bottom').addClass('two_bottom2');
			}
			
			if(minutos >= 30) {
				$('#minute_ones_top').removeClass('two_top2');
				$('#minute_ones_bottom').removeClass('two_bottom2');
				$('#minute_ones_top').addClass('three_top2');
				$('#minute_ones_bottom').addClass('three_bottom2');
			}
			
			if(minutos >= 40) {
				$('#minute_ones_top').removeClass('three_top2');
				$('#minute_ones_bottom').removeClass('three_bottom2');
				$('#minute_ones_top').addClass('four_top2');
				$('#minute_ones_bottom').addClass('four_bottom2');
			}
			
			if(minutos >= 50) {
				$('#minute_ones_top').removeClass('four_top2');
				$('#minute_ones_bottom').removeClass('four_bottom2');
				$('#minute_ones_top').addClass('five_top2');
				$('#minute_ones_bottom').addClass('five_bottom2');
			}


			
			if(minutos == 0 || minutos == 10 || minutos == 20 || minutos == 30 || minutos == 40 || minutos == 50) {
				$('#minute_tens_top').removeClass('nine_top2');
				$('#minute_tens_bottom').removeClass('nine_bottom2');
				$('#minute_tens_top').addClass('zero_top2');
				$('#minute_tens_bottom').addClass('zero_bottom2');
			}
			
			if(minutos == 1 || minutos == 11 || minutos == 21 || minutos == 31 || minutos == 41 || minutos == 51) {
				$('#minute_tens_top').removeClass('zero_top2');
				$('#minute_tens_bottom').removeClass('zero_bottom2');
				$('#minute_tens_top').addClass('one_top2');
				$('#minute_tens_bottom').addClass('one_bottom2');
			}
			
			if(minutos == 2 || minutos == 12 || minutos == 22 || minutos == 32 || minutos == 42 || minutos == 52) {
				$('#minute_tens_top').removeClass('one_top2');
				$('#minute_tens_bottom').removeClass('one_bottom2');
				$('#minute_tens_top').addClass('two_top2');
				$('#minute_tens_bottom').addClass('two_bottom2');
			}
			
			if(minutos == 3 || minutos == 13 || minutos == 23 || minutos == 33 || minutos == 43 || minutos == 53) {
				$('#minute_tens_top').removeClass('two_top2');
				$('#minute_tens_bottom').removeClass('two_bottom2');
				$('#minute_tens_top').addClass('three_top2');
				$('#minute_tens_bottom').addClass('three_bottom2');
			}
			
			if(minutos == 4 || minutos == 14 || minutos == 24 || minutos == 34 || minutos == 44 || minutos == 54) {
				$('#minute_tens_top').removeClass('three_top2');
				$('#minute_tens_bottom').removeClass('three_bottom2');
				$('#minute_tens_top').addClass('four_top2');
				$('#minute_tens_bottom').addClass('four_bottom2');
			}
			
			if(minutos == 5 || minutos == 15 || minutos == 25 || minutos == 35 || minutos == 45 || minutos == 55) {
				$('#minute_tens_top').removeClass('four_top2');
				$('#minute_tens_bottom').removeClass('four_bottom2');
				$('#minute_tens_top').addClass('five_top2');
				$('#minute_tens_bottom').addClass('five_bottom2');
			}
			
			if(minutos == 6 || minutos == 16 || minutos == 26 || minutos == 36 || minutos == 46 || minutos == 56) {
				$('#minute_tens_top').removeClass('five_top2');
				$('#minute_tens_bottom').removeClass('five_bottom2');
				$('#minute_tens_top').addClass('six_top2');
				$('#minute_tens_bottom').addClass('six_bottom2');
			}
			
			if(minutos == 7 || minutos == 17 || minutos == 27 || minutos == 37 || minutos == 47 || minutos == 57) {
				$('#minute_tens_top').removeClass('six_top2');
				$('#minute_tens_bottom').removeClass('six_bottom2');
				$('#minute_tens_top').addClass('seven_top2');
				$('#minute_tens_bottom').addClass('seven_bottom2');
			}
			
			if(minutos == 8 || minutos == 18 || minutos == 28 || minutos == 38 || minutos == 48 || minutos == 58) {
				$('#minute_tens_top').removeClass('seven_top2');
				$('#minute_tens_bottom').removeClass('seven_bottom2');
				$('#minute_tens_top').addClass('eight_top2');
				$('#minute_tens_bottom').addClass('eight_bottom2');
			}

			if(minutos == 9 || minutos == 19 || minutos == 29 || minutos == 39 || minutos == 49 || minutos == 59) {
				$('#minute_tens_top').removeClass('eight_top2');
				$('#minute_tens_bottom').removeClass('eight_bottom2');
				$('#minute_tens_top').addClass('nine_top2');
				$('#minute_tens_bottom').addClass('nine_bottom2');
			}




			if(segundos >= 0) {
				$('#second_ones_top').removeClass('five_top1');
				$('#second_ones_bottom').removeClass('five_bottom1');
				$('#second_ones_top').addClass('zero_top1');
				$('#second_ones_bottom').addClass('zero_bottom1');
			}
			
			if(segundos >= 10) {
				$('#second_ones_top').removeClass('zero_top1');
				$('#second_ones_bottom').removeClass('zero_bottom1');
				$('#second_ones_top').addClass('one_top1');
				$('#second_ones_bottom').addClass('one_bottom1');
			}
			
			if(segundos >= 20) {
				$('#second_ones_top').removeClass('one_top1');
				$('#second_ones_bottom').removeClass('one_bottom1');
				$('#second_ones_top').addClass('two_top1');
				$('#second_ones_bottom').addClass('two_bottom1');
			}
			
			if(segundos >= 30) {
				$('#second_ones_top').removeClass('two_top1');
				$('#second_ones_bottom').removeClass('two_bottom1');
				$('#second_ones_top').addClass('three_top1');
				$('#second_ones_bottom').addClass('three_bottom1');
			}
			
			if(segundos >= 40) {
				$('#second_ones_top').removeClass('three_top1');
				$('#second_ones_bottom').removeClass('three_bottom1');
				$('#second_ones_top').addClass('four_top1');
				$('#second_ones_bottom').addClass('four_bottom1');
			}
			
			if(segundos >= 50) {
				$('#second_ones_top').removeClass('four_top1');
				$('#second_ones_bottom').removeClass('four_bottom1');
				$('#second_ones_top').addClass('five_top1');
				$('#second_ones_bottom').addClass('five_bottom1');
			}
			

			if(segundos == 0 || segundos == 10 || segundos == 20 || segundos == 30 || segundos == 40 || segundos == 50) {
				$('#second_tens_top').removeClass('nine_top1');
				$('#second_tens_bottom').removeClass('nine_bottom1');
				$('#second_tens_top').addClass('zero_top1');
				$('#second_tens_bottom').addClass('zero_bottom1');
			}
			
			if(segundos == 1 || segundos == 11 || segundos == 21 || segundos == 31 || segundos == 41 || segundos == 51) {
				$('#second_tens_top').removeClass('zero_top1');
				$('#second_tens_bottom').removeClass('zero_bottom1');
				$('#second_tens_top').addClass('one_top1');
				$('#second_tens_bottom').addClass('one_bottom1');
			}
			
			if(segundos == 2 || segundos == 12 || segundos == 22 || segundos == 32 || segundos == 42 || segundos == 52) {
				$('#second_tens_top').removeClass('one_top1');
				$('#second_tens_bottom').removeClass('one_bottom1');
				$('#second_tens_top').addClass('two_top1');
				$('#second_tens_bottom').addClass('two_bottom1');
			}
			
			if(segundos == 3 || segundos == 13 || segundos == 23 || segundos == 33 || segundos == 43 || segundos == 53) {
				$('#second_tens_top').removeClass('two_top1');
				$('#second_tens_bottom').removeClass('two_bottom1');
				$('#second_tens_top').addClass('three_top1');
				$('#second_tens_bottom').addClass('three_bottom1');
			}
			
			if(segundos == 4 || segundos == 14 || segundos == 24 || segundos == 34 || segundos == 44 || segundos == 54) {
				$('#second_tens_top').removeClass('three_top1');
				$('#second_tens_bottom').removeClass('three_bottom1');
				$('#second_tens_top').addClass('four_top1');
				$('#second_tens_bottom').addClass('four_bottom1');
			}
			
			if(segundos == 5 || segundos == 15 || segundos == 25 || segundos == 35 || segundos == 45 || segundos == 55) {
				$('#second_tens_top').removeClass('four_top1');
				$('#second_tens_bottom').removeClass('four_bottom1');
				$('#second_tens_top').addClass('five_top1');
				$('#second_tens_bottom').addClass('five_bottom1');
			}
			
			if(segundos == 6 || segundos == 16 || segundos == 26 || segundos == 36 || segundos == 46 || segundos == 56) {
				$('#second_tens_top').removeClass('five_top1');
				$('#second_tens_bottom').removeClass('five_bottom1');
				$('#second_tens_top').addClass('six_top1');
				$('#second_tens_bottom').addClass('six_bottom1');
			}
			
			if(segundos == 7 || segundos == 17 || segundos == 27 || segundos == 37 || segundos == 47 || segundos == 57) {
				$('#second_tens_top').removeClass('six_top1');
				$('#second_tens_bottom').removeClass('six_bottom1');
				$('#second_tens_top').addClass('seven_top1');
				$('#second_tens_bottom').addClass('seven_bottom1');
			}
			
			if(segundos == 8 || segundos == 18 || segundos == 28 || segundos == 38 || segundos == 48 || segundos == 58) {
				$('#second_tens_top').removeClass('seven_top1');
				$('#second_tens_bottom').removeClass('seven_bottom1');
				$('#second_tens_top').addClass('eight_top1');
				$('#second_tens_bottom').addClass('eight_bottom1');
			}
			
			if(segundos == 9 || segundos == 19 || segundos == 29 || segundos == 39 || segundos == 49 || segundos == 59) {
				$('#second_tens_top').removeClass('eight_top1');
				$('#second_tens_bottom').removeClass('eight_bottom1');
				$('#second_tens_top').addClass('nine_top1');
				$('#second_tens_bottom').addClass('nine_bottom1');
			}
		});
});