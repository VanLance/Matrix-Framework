export default class Container {
  constructor(
    private _borderColor: string = 'black',
    private _borderRadius: string = '0px',
    private _borderStyle: string = 'solid 1px'
  ) {}

  public get borderStyle(): string {
    return this._borderStyle;
  }
  public set borderStyle(value: string) {
    this._borderStyle = value;
  }
  public get borderRadius(): string {
    return this._borderRadius;
  }
  public set borderRadius(value: string) {
    this._borderRadius = value;
  }
  public get borderColor(): string {
    return this._borderColor;
  }
  public set borderColor(value: string) {
    this._borderColor = value;
  }

  public get attributes(): Partial<CSSStyleDeclaration> {
    return {
      borderColor: this.borderColor,
      borderRadius: this.borderRadius,
      borderStyle: this.borderStyle,
    };
  }
}
