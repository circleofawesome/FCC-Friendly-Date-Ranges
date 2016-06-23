function numToDate(num,currentYear){
	var months={'01':'January','02':'February','03':'March','04':'April','05':'May','06':'June','07':'July','08':'August','09':'September','10':'October','11':'November','12':'December'};
	if(currentYear){
		//return only the month and day if currentYear is true
		num=num.split('-');
		if(num[2]==='01'){
			return months[num[1]]+" "+parseInt(num[2])+"st";
		}
		else if(num[2]==='02'){
			return months[num[1]]+" "+parseInt(num[2])+"nd";
		}
		else if(num[2]==='03'){
			return months[num[1]]+" "+parseInt(num[2])+"rd";
		}
		else{
			return months[num[1]]+" "+parseInt(num[2])+"th";
		}
	}
	else{
		//return the whole date
		num=num.split('-');

		if(num[2]==='01'){
			return months[num[1]]+" "+parseInt(num[2])+"st, "+num[0];
		}
		else if(num[2]==='02'){
			return months[num[1]]+" "+parseInt(num[2])+"nd, "+num[0];
		}
		else if(num[2]==='03'){
			return months[num[1]]+" "+parseInt(num[2])+"rd, "+num[0];
		}
		else{
			return months[num[1]]+" "+parseInt(num[2])+"th, "+num[0];
		}
	}
}

function dayNumber(date){
	date=date.split('-');
	var monthDays={'01':0,'02':31,'03':59,'04':90,'05':120,'06':151,'07':181,'08':212,'09':243,'10':273,'11':304,'12':334};
	if((parseInt(date[0])%4===0)&&(parseInt(date[1])>2)){
		//leap year
		return monthDays[date[1]]+parseInt(date[2])+1;
	}
	return monthDays[date[1]]+parseInt(date[2]);
}

function makeFriendlyDates(arr) {
 var date1=arr[0].split('-');
 var date2=arr[1].split('-');

 var year1=date1[0];
 var year2=date2[0];

 var date1Number=dayNumber(arr[0]);
 var date2Number=dayNumber(arr[1]);

 var properDate1=numToDate(arr[0],false);
 var properDate2=numToDate(arr[1],false);

 if((year1===year2)&&(date1Number===date2Number)){
 	return [numToDate(arr[0],false)];
 }
 else if(year1===year2){
 	properDate1=numToDate(arr[0],true);
 	properDate2=numToDate(arr[1],true).split(' ');
 	return [properDate1,properDate2[1]];
 }
}

makeFriendlyDates(['2016-07-01', '2016-07-04']);
