'user strict';

class Sharpie {
  private color: string;
  private width: number;
  private inkAmount: number;

  constructor(color, width) {
    this.color = color;
    this.width = width;
    this.inkAmount = 100;
  }

  public use() {
    this.inkAmount--;
  }
}

export{Sharpie};
