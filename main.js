		const TAX = 0.2;
		const NI = 0.12;
		
		
		// Co tydzień
		
		document.getElementById('myBtn').addEventListener('click', () => {
			let STAWKA = stawka.value; 
			console.log(STAWKA);
			return STAWKA;
		});
		
		document.getElementById('myBtn').addEventListener('click', () => {
			let tydzien = pole.value; 
			console.log(tydzien);
			return tydzien;
		});
		
		function calosc(){
			ilePieniedzy = Math.round((stawka.value * pole.value)*100) / 100;
			console.log(ilePieniedzy);
			return ilePieniedzy;
		};
		
		function ileTaxu(){
			if(ilePieniedzy > 228.07){
				poTaxie = Math.round(((ilePieniedzy - 227.88) * (1 - TAX) + 227.88)*100) / 100;
				poTaxieTotal = Math.round((ilePieniedzy - poTaxie)*100) / 100; 
				console.log(ilePieniedzy - 227.88);
				console.log(poTaxie);
				console.log(poTaxieTotal);
				return poTaxieTotal;
			} else {
				poTaxieTotal = 0;
				console.log(poTaxieTotal);
				return poTaxieTotal;
			}
		};
		function ileNinsurance() {
			if(ilePieniedzy > 162 && ilePieniedzy < 891){
				poInsurance = Math.round(((ilePieniedzy - 162) * (1 - NI) + 162)*100) / 100; 
				poInsuranceTotal = Math.round((ilePieniedzy - poInsurance)*100) / 100;
				console.log(poInsurance);
				console.log(poInsuranceTotal);
				return poInsuranceTotal;
			} else {
				poInsuranceTotal = 0;
				return poInsuranceTotal;
			}
		};
		function total() {
			naCzysto = ilePieniedzy - poTaxieTotal - poInsuranceTotal;
			console.log(Math.round((naCzysto)*100) / 100);
			return naCzysto;
		};
		function wypisz(){
			suma.textContent = "Za tydzień pracy należy się " + Math.round((naCzysto)*100) / 100 + " £. " + " W tym taxu to " + Math.round((poTaxieTotal)*100) / 100 + " £, a National Insurance w tym to "+ Math.round((poInsuranceTotal)*100) / 100 + " £.";
		}
		document.getElementById('myBtn').addEventListener('click', () => {
			calosc();
			ileTaxu();
			ileNinsurance();
			total();
			wypisz();
		});
		//Co dwa tygodnie
		
		document.getElementById('myBtn2').addEventListener('click', () => {
			let STAWKA2 = stawka2.value; 
			console.log(STAWKA2);
			return STAWKA2;
		});
		
		document.getElementById('myBtn2').addEventListener('click', () => {
			let dzien2 = pole2.value; 
			console.log(dzien2);
			return dzien2;
		});
		
		function calosc2(){
			ilePieniedzy2 = Math.round((stawka2.value * pole2.value)*100) / 100;
			console.log(ilePieniedzy2);
			return ilePieniedzy2;
		};
		
		function ileTaxu2(){
			if(ilePieniedzy2 > 456.14){
				poTaxie2 = Math.round(((ilePieniedzy2 - 456.14) * (1 - TAX) + 456.14)*100) / 100;
				poTaxieTotal2 = Math.round((ilePieniedzy2 - poTaxie2)*100) / 100; 
				console.log(poTaxie2);
				console.log(poTaxieTotal2);
				return poTaxieTotal2;
			} else {
				poTaxieTotal2 = 0;
				console.log(poTaxieTotal2);
				return poTaxieTotal2;
			}
		};
		function ileNinsurance2() {
			if(ilePieniedzy2 > 324.2){
				poInsurance2 = Math.round(((ilePieniedzy2 - 324.2) * (1 - NI) + 324.2)*100) / 100; 
				poInsuranceTotal2 = Math.round((ilePieniedzy2 - poInsurance2)*100) / 100;
				console.log(poInsurance2);
				console.log(poInsuranceTotal2);
				return poInsuranceTotal2;
			} else {
				poInsuranceTotal2 = 0;
				return poInsuranceTotal2;
			}
		};
		function total2() {
			naCzysto2 = ilePieniedzy2 - poTaxieTotal2 - poInsuranceTotal2;
			console.log(Math.round((naCzysto2)*100) / 100);
			return naCzysto2;
			
		};
		function wypisz2(){
			suma2.textContent = "Za dwa tygodnie pracy należy się " + Math.round((naCzysto2)*100) / 100 + " £." + " W tym taxu to " + Math.round((poTaxieTotal2)*100) / 100 + " £, a National Insurance w tym to "+ Math.round((poInsuranceTotal2)*100) / 100 + " £.";;
		}
		document.getElementById('myBtn2').addEventListener('click', () => {
			calosc2();
			ileTaxu2();
			ileNinsurance2();
			total2();
			wypisz2();
		});
		