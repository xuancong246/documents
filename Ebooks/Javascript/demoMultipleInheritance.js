var Button = function(value) {
    this.value = value;
}

var methodsButton = function() {
    this.onClick = function() {
        alert("You click on button " + this.value);
    }
}
methodsButton.call(Button.prototype);

var Rectangle = function(height, width) {
    this.height = height;
    this.width = width;
}

var methodsRectangle = function() {
    this.describe = function() {
        alert("Rectangle height " + this.height + " width " + this.width);
    }
}
methodsRectangle.call(Rectangle.prototype);

var RectangleButton = function (height, width, value) {
    this.height = height;
    this.width = width;
    this.value = value;
}

methodsButton.call(RectangleButton.prototype);
methodsRectangle.call(RectangleButton.prototype);

var btnSave = new RectangleButton(10, 50, "Save");
btnSave.onClick();
btnSave.describe();
alert(btnSave instanceof RectangleButton);