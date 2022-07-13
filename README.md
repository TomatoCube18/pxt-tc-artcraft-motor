# Art and Craft Motor Controller

MakeCode package for the TomatoCube motor driver.


## Motor Blocks

The Art and Craft board provides a motor controller that can control one bi-directional DC motors.

### runMotor

Sets the speed of a motor in the range of -100 to 100.

```sig
runMotor(MakerBitMotor.A, 80)
```

### stopMotor

Stops a motor.

```sig
stopMotor(MakerBitMotor.A)
```

### setMotorDirection

Sets the rotation direction of a motor. Use this function at start time to configure your motors without the need to rewire.

```sig
setMotorRotation(MakerBitMotor.A, MakerBitMotorRotation.Backward)
```

## License

Licensed under the MIT License (MIT). See LICENSE file for more details.

## Supported targets

- for PXT/microbit
