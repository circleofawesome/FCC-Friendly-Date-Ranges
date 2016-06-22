//takes a string date and converts it to a friendly date

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
		//return months.num[1]+" "+
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

numToDate('2016-07-01',false);