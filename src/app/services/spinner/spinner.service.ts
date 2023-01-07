import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  constructor() { }
}

export enum SpinnerType {
  Cog = 'cog',
  SquareJellyBox = 'square-jelly-box',
  BallScaleMultiple='ball-scale-multiple'
}
