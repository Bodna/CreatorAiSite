function createBubbles() {
    var numBubbles = 100;

            var bubbleColors = ["#7A86AD", "#505F90", "#172556", "#07123A"]; // Array of predefined bubble colors

            for (var i = 0; i < numBubbles; i++) {
                var bubble = document.createElement("div");
                bubble.classList.add("bubble");

                // Generate random positions for bubbles
                var xPos = Math.floor(Math.random() * (window.innerWidth * 1));
                var yPos = Math.floor(Math.random() * (window.innerHeight * 1));
                // Generate random size for bubbles
                var size = Math.floor(Math.random() * 40) + 10; // Range: 10 - 50px

                // Randomly select a color from the bubbleColors array
                var bubbleColor = bubbleColors[Math.floor(Math.random() * bubbleColors.length)];


                bubble.style.left = xPos + "px";
                bubble.style.top = yPos + "px";
                bubble.style.width = size + "px";
                bubble.style.height = size + "px";
                bubble.style.backgroundColor = bubbleColor;
                bubble.style.boxShadow = `0 0 10px 5px ${bubbleColors}`;

                var duration = Math.random() * 5 + 2; // Range: 2 - 6 seconds
                bubble.style.animationDuration = duration + "s";

                document.body.appendChild(bubble);
            }
}


window.addEventListener("DOMContentLoaded", createBubbles);