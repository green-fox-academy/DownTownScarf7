class Thing {
  private name: string;
  private completed: boolean;

  constructor(name: string){
    this.name = name;
    this.completed = false;
  }
  public complete() {
    this.completed = true;
  }
  public getName(): string {
    return this.name;
  }
  public getStatus(): boolean {
    return this.completed;
  }
}

export {Thing};
