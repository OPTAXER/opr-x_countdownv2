let alreadyProgressing = false

$(document).ready(function(){
	window.addEventListener('message', function(event) {
		let data = event.data
		if (data.action == 'run') {
			progress(data)
		}
	});
});

function progress(data) {
    if (!alreadyProgressing) {
        alreadyProgressing = true;
        $('#progress').removeClass('hidden');
        $('#progress-value').css("animation", `load ${data.time * 60}s normal forwards`);
        $('#progress').css("animation", `glow ${data.time * 60}s normal forwards`);
        let bodyStyles = window.getComputedStyle(document.body);
        let mainColor = bodyStyles.getPropertyValue('--mainColor');
        document.body.style.setProperty('--mainColor', data.color);

        let endTime = Date.now() + (data.time * 60 * 1000);
        let remainingTime = data.time;

        // Update the progress bar every second
        let interval = setInterval(function() {
            let elapsedTime = Math.round((endTime - Date.now()) / 1000);
            let progressPercent = Math.round((data.time * 60 - elapsedTime) / (data.time * 60) * 100);
            let minutes = Math.floor(elapsedTime / 60);
            let seconds = elapsedTime % 60;
            $('#progress-text').text(`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);
            $('#progress-value').css("width", `${progressPercent}%`);

            if (elapsedTime <= 0) {
                clearInterval(interval);
                $('#progress').addClass('hidden');
                alreadyProgressing = false;
                $('#progress-value').css("animation", '');
                $('#progress').css("animation", '');
                document.body.style.setProperty('--mainColor', mainColor);
            }
        }, 1000);
    } else {
        $.post('https://opr_countdown/notif', JSON.stringify({ text: "Already doing an action." }));
        return;
    }
}

