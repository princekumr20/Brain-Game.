let container =  document.querySelector('.container')
container.style.display='none'


let gametime=30;

let start =document.querySelector('#start');


let time= document.querySelector('#time');

let userInput =document.querySelector('#user_input');

let answer =8;

let marks =0;

let fnum,snum,operator;

let scoreUi =document.querySelector('#score');

const op =['+','-','*','/','%'];

let response=document.querySelector('#response');

let fnumUi =document.querySelector('#fnumUI');
let snumUi =document.querySelector('#snumUI');
let opUi =document.querySelector('#opUI');

let final  = document.querySelector('#final');


start.addEventListener('click',function(){
container.style.display='block';
document.querySelector('#start').style.display='none';


timer()



})
userInput.addEventListener('keypress', function(e ){
	if (e.which === 13){
		if(answer === Number(userInput.value)){
			marks =marks +3;

			response.innerHTML='<h2 style:color=#000000;>Correct<h2>';


			
		}else{
		     marks =marks -1;
		     response.innerHTML='<h2 >Incorrect<h2>';

		}
		userInput.value='';

		fnum=Math.floor(Math.random() * 200);
		snum=Math.floor(Math.random() * 200);
		operator=op[Math.floor(Math.random() *op.length)];
		

		fnumUi.textContent=fnum;
		snumUi.textContent=snum;
		opUi.textContent =operator;

		if(operator ==="+"){
			answer =fnum + snum;
		}else if (operator ==='-'){
			answer =fnum - snum;
		}else if (operator ==='*'){
			answer =fnum * snum;

		}else if (operator ==='/'){
			answer =fnum / snum;
		}else{
			answer =fnum % snum;

		}
		scoreUi.textContent =marks;
	}

})

function timer(){

let x =	setInterval(function(){
		if(time.textContent>0){
			let newTime = time.textContent - 1;
			time.textContent =newTime;
			

		}else{
			clearInterval(x);

			container.style.display='none';

			time.textContent=gametime;

			start.style.display='block';


			/*final.innerHTML='<h2>you scored  {marks}</h2>';*/
			final.innerHTML= marks ;


         
            marks=0;
			



		}


	}, 1000)
}