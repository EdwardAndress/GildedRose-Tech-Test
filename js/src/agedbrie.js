class AgedBrie extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  update() {
    switch(true) {
      case(this.quality < 50):
        this.quality += 1
    }
    this.sellIn -= 1
  }
}
