var swaptag=false;
	
	function newgame()
	{	
		
		var date=new Date();
		//alert(date.getTime().toString());
		var arry=[];
		var num=Math.floor(Math.random()*10);
		//console.log(num);
		arry.push(num);
		for(index=0;index<8;index++)
		{	
			num++;
			arry.push(num%9);
		}
		console.log(arry);
		var str;
		var id;
		for(i=1;i<10;i++)
		{
			switch(i)
			{
				
				case 2:id="two";
					break;
				case 3:id="three";
					break;
				case 4:id="four";
					break;
				case 5:id="five";
					break;
				case 6:id="six";
					break;
				case 7:id="seven";
					break;
				case 8:id="eight";
					break;
				case 9:id="nine";
					break;
				case 1:id="one";
					break;
			}
			
			var num=arry.pop();
			switch(num)
			{
				case 0:str=1;
					break;
				case 1:str=2;
					break;
				case 2:str=3;
					break;
				case 3:str=4;
					break;
				case 4:str=5;
					break;
				case 5:str=6;
					break;
				case 6:str=7;
					break;
				case 7:str=8;
					break;
				case 8:str=".";
					break;
			}
			document.getElementById(id).innerHTML= str;
		}	
		
	}
	
	var tempid="one";
	function swap(id)
	{
		
		if(tempid==id)
		{
			document.getElementById(id).style.color = 'black';
		}
		else
		{
			if((id=="one") &&((tempid=="two" || tempid=="four")))getswap(tempid,id);
			if((id=="two") &&((tempid=="one" || tempid=="three" || tempid=="five")))getswap(tempid,id);
			if((id=="three") &&((tempid=="two" || tempid=="six")))getswap(tempid,id);
			if((id=="four") &&((tempid=="one" || tempid=="five" || tempid=="seven")))getswap(tempid,id);
			if((id=="five") &&((tempid=="two" || tempid=="four" || tempid=="six" || tempid=="eight")))getswap(tempid,id);
			if((id=="six") &&((tempid=="three" || tempid=="five" ||tempid=="nine")))getswap(tempid,id);
			if((id=="seven") &&((tempid=="four" || tempid=="eight")))getswap(tempid,id);
			if((id=="eight") &&((tempid=="seven" || tempid=="five" || tempid=="nine")))getswap(tempid,id);
			if((id=="nine") &&((tempid=="six" || tempid=="eight")))getswap(tempid,id);
			
			document.getElementById(id).style.color='red';
			document.getElementById(tempid).style.color='black';
		}
		console.log(id,tempid);
		tempid=id;
	}
	function getswap(tempid,id)
	{
		console.log(document.getElementById(id).innerHTML);
		if(document.getElementById(id).innerHTML==".")
		{
			var src=document.getElementById(tempid).innerHTML;
			document.getElementById(tempid).innerHTML=document.getElementById(id).innerHTML;
			document.getElementById(id).innerHTML=src;
		}
		check();
		
	}
	function check()
	{
		if("1"==document.getElementById("one").innerHTML)
		{
			if("2"==document.getElementById("two").innerHTML)
			{
				if("3"==document.getElementById("three").innerHTML)
				{
					if("4"==document.getElementById("four").innerHTML)
					{
						if("5"==document.getElementById("five").innerHTML)
						{
							if("6"==document.getElementById("six").innerHTML)
							{
								if("7"==document.getElementById("seven").innerHTML)
								{	
									if("8"==document.getElementById("eight").innerHTML)
									{
										if("."==document.getElementById("nine").innerHTML)
										{
											document.getElementById("nine").innerHTML=9;
											window.alert("Congradulation you won the Game")
										}
									}
								}
							}
						}
					}
				}
			}
		}
			
	}
