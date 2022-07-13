// MakerBit motor driver blocks

const enum MakerBitMotor {
  //% block="A"
  A = 0,
}

const enum MakerBitMotorRotation {
  //% block="forward"
  Forward = 1,
  //% block="backward"
  Backward = -1,
}

//% color=#0fbc11 icon="\uf21c" block="DC Motor"
namespace motorbit {

  let MOTORA_PIN0 = DigitalPin.P12
  let MOTORA_PIN1 = DigitalPin.P13

  const motorRotations = [
    MakerBitMotorRotation.Forward
  ];

  /**
   * Motor Pinout.
   * @param motor pinout, eg: DigitalPin.P12, DigitalPin.P13
   */
  //% blockId="motorbit_pin_select" block="use pin %pin0 and %pin1 for motor"
  //% pin0.fieldEditor="gridpicker"
  //% pin0.fieldOptions.columns=4
  //% pin0.fieldOptions.tooltips="false"
  //% pin1.fieldEditor="gridpicker"
  //% pin1.fieldOptions.columns=4
  //% pin1.fieldOptions.tooltips="false"
  //% weight=91
  export function setMotorPin(
    pin0: DigitalPin
    pin1: DigitalPin
  ): void {
      MOTORA_PIN0 = pin0
      MOTORA_PIN1 = pin1
  }

  /**
   * Sets the speed of a motor.
   * @param motor motor, eg: MakerBitMotor.A
   * @param speed percentage in the range of -100 to 100, eg: 80
   */
  //% blockId="motorbit_motor_run" block="run DC motor | at speed %speed \\%"
  //% speed.min=-100
  //% speed.max=100
  //% weight=90
  export function runMotor(speed: number): void {
    if (speed === 0) {
      stopMotor();
      return;
    }

    const absSpeedPercentage = Math.min(Math.abs(speed), 100);
    const analogSpeed = pins.map(absSpeedPercentage, 0, 100, 0, 1023);

    
    const isClockwise = speed * motorRotations[MakerBitMotor.A] > 0;
    pins.digitalWritePin(isClockwise ? MOTORA_PIN0: MOTORA_PIN1, 0);
    if (speed === 100) {
      // Avoid PWM whenever possible as only 3 concurrent PWM outputs are available on the microbit
      pins.digitalWritePin(isClockwise ? MOTORA_PIN1: MOTORA_PIN0, 1);
    } else {
      pins.analogWritePin(isClockwise ? MOTORA_PIN1: MOTORA_PIN0, analogSpeed);
    }
    

  }

  /**
   * Stops a motor.
   * @param motor motor, eg: MakerBitMotor.A
   */
  //% blockId="motorbit_motor_stop" block="stop motor %motor"
  //% weight=89
  export function stopMotor(): void {
      pins.digitalWritePin(MOTORA_PIN0, 0);
      pins.digitalWritePin(MOTORA_PIN1, 0);
  }

  /**
   * Apply brakes to the motor.
   * @param motor motor, eg: MakerBitMotor.A
   */
  //% blockId="motorbit_brake_stop" block="brake motor %motor | (experimental)"
  //% weight=89
  export function brakeMotor(): void {
      pins.digitalWritePin(MOTORA_PIN0, 1);
      pins.digitalWritePin(MOTORA_PIN1, 1);
      basic.pause(250);
      stopMotor();
  }

  /**
   * Sets the rotation direction of a motor. Use this function at start time to configure your motors without the need to rewire.
   * @param motor motor, eg: MakerBitMotor.A
   * @param rotation rotation of the motor, eg: MakerBitMotorRotation.Forward
   */
  //% blockId=motorbit_motor_set_rotation block="set DC motor rotation | to %rotation"
  //% weight=88
  export function setMotorRotation(
    rotation: MakerBitMotorRotation
  ) {
      motorRotations[MakerBitMotor.A] = rotation;
  }
}
