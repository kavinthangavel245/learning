const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout( () => {
        document.body.style.backgroundColor = newColor;
        console.log("changed to new color: " + newColor);
        doNext && doNext();
    },delay)
}

delayedColorChange("red",1000,() => {
    delayedColorChange("blue",1000,() => {
        delayedColorChange("green",1000,() => {
            delayedColorChange("yellow",1000,() => {
                delayedColorChange("pink",1000,() => {
                    delayedColorChange("purple",1000,() => {
                        console.log("All colors changed!");
                    });
                });
            });
        });
    });
})