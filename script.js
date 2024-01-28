const container = document.querySelector('.container');
const question = document.querySelector('.header_text');
const yesBtn = document.querySelector('#yesButton');
const image = document.querySelector('img');

const containerRect = container.getBoundingClientRect();


yesBtn.addEventListener('click',()=>{
    question.innerHTML='waiting for the day';
}); 
yesBtn.addEventListener('click',()=>{
    image.innerHTML="yes.gif";
});

function sendSMS() {
    // Make an HTTP POST request to your local server
   $.post('http://dulcet-axolotl-7109c7.netlify.app/send-sms', function (data) {
    console.log(data);
    alert('SMS sent successfully!');
    document.getElementById('dynamicImage').src = 'yes.gif'; 
    });
}

function moveButton() {
    var x = Math.random() * (window.innerWidth - 
        document.getElementById('noButton').offsetWidth - 85);
    var y = Math.random() * (window.innerHeight - 
        document.getElementById('noButton').offsetHeight - 48);
    document.getElementById('noButton').style.left = x + 'px';
    document.getElementById('noButton').style.top = y + 'px';
}
