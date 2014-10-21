function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = [];

var types = {
	agedBrie: 'Aged Brie',
	backstage: 'Backstage passes to a TAFKAL80ETC concert',
	sulfuras: 'Sulfuras, Hand of Ragnaros'
}

function Product (name, sell_in, quality) {
	this.name = name;
	this.sell_in = sell_in;
	this.quality = quality;
}

Product.prototype.update_quality = function() {
}

function AgedBrie(sell_in, quality) {
	Product.call(this, types.agedBrie, sell_in, quality);
}
AgedBrie.prototype = Object.create(Product.prototype);
AgedBrie.prototype.constructor = AgedBrie;

AgedBrie.prototype.update_quality = function() {
	if (this.quality < 50) {
		this.quality = this.quality + 1;
	}
	this.sell_in = this.sell_in - 1;
	if (this.sell_in < 0) {
		if (this.quality < 50) {
			this.quality = this.quality + 1;
		}
	}
}

function Backstage(sell_in, quality) {
	Product.call(this, types.backstage, sell_in, quality);
}
Backstage.prototype = Object.create(Product.prototype);
Backstage.prototype.constructor = Backstage;

Backstage.prototype.update_quality = function() {
	if (this.quality < 50) {
		this.quality = this.quality + 1;
		if (this.sell_in < 11) {
			this.quality = this.quality + 1;
		}
		if (this.sell_in < 6) {
			this.quality = this.quality + 1;
		}
	}
	this.sell_in = this.sell_in - 1;
	if (this.sell_in < 0) {
		this.quality = 0;
	}
}

function Sulfuras(sell_in, quality) {
	Product.call(this, types.sulfuras, sell_in, quality);
}
Sulfuras.prototype = Object.create(Product.prototype);
Sulfuras.prototype.constructor = Sulfuras;

Sulfuras.prototype.update_quality = function() {
}

function update_quality() {
	for (var i = 0; i < items.length; i++) {
		items[i].update_quality();
	}
}