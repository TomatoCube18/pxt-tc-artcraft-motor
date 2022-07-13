/**
 * Motor tests
 */

makerbit.runMotor(MakerBitMotor.A, 80);
makerbit.stopMotor(MakerBitMotor.A);

makerbit.runMotor(MakerBitMotor.B, -50);
makerbit.stopMotor(MakerBitMotor.B);

makerbit.runMotor(MakerBitMotor.All, 80);
makerbit.stopMotor(MakerBitMotor.All);

makerbit.setMotorRotation(MakerBitMotor.A, MakerBitMotorRotation.Forward);
makerbit.setMotorRotation(MakerBitMotor.B, MakerBitMotorRotation.Backward);
