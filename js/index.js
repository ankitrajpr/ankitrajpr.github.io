$(function () {
  setTimeout(function () {
    $("#preloader").fadeOut("slow", function () {
      $(this).remove();
    });
  }, 1500);
});

function totalDays(){
	var minutes = 1000*60;
    var hours = minutes*60;
    var days = hours*24;
    var months = days*30;
    var years = months*12;

    var d1=new Date(2017,01,27);//Remember, months are 0 based in JS
	var d2=new Date();

	var diff_days = Math.round((d2-d1)/days);

	return diff_days;
}
function printYear(){
	var diff_days = totalDays();
	var res_year = Math.floor(diff_days/(30*12));
	return res_year;

}

function printMonth(){
	var diff_days = totalDays();
	var res_month = Math.floor((diff_days/30)%12)+1;
	console.log('Total Experience: '+printYear()+' Years '+res_month+' Months');
	return res_month;
}

function populatedata(imgSrc, certUrl){
    document.getElementById("cert_img_field").src = imgSrc;
    document.getElementById("cert_url_field").href = certUrl;
    console.log("model is opened");
  }


function renderLastUpdatedTime() {
  fetch('https://api.github.com/repos/ankitrajpr/ankitrajpr.github.io/commits?per_page=1')
    .then(res => res.json())
    .then(res => {
      const lastCommitDate = moment(res[0].commit.committer.date).format("dddd, MMM Do, YYYY");
      const timeFromNow = moment(res[0].commit.committer.date).fromNow();
      document.getElementById('last-update-time').innerHTML = "Updated " + timeFromNow;
    });
}




$(function () {
    $('[data-toggle="tooltip"]').tooltip();
    renderLastUpdatedTime();
    document.getElementById("yearsExperience").innerHTML = printYear();
    document.getElementById("monthsExperience").innerHTML = printMonth();

})


$(function () {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out-back',
      once: true

    });
})
