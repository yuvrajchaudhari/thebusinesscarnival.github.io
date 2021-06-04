document.addEventListener('DOMContentLoaded', () => {

    // Unix timestamp (in seconds) to count down to
    var twoDaysFromNow = (new Date("Jun 4, 2021 15:37:25").getTime() / 1000) + (86400 * 118) + 1;

    // Set up FlipDown
    var flipdown = new FlipDown(twoDaysFromNow)

        // Start the countdown
        .start()

        // Do something when the countdown ends
        .ifEnded(() => {
            console.log('The countdown has ended!');
        });



    var ver = document.getElementById('ver');
    ver.innerHTML = flipdown.version;
});