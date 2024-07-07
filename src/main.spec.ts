import { Test, TestingModule } from '@nestjs/testing';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { bootstrap, configureEnvironment } from './main'; // Adjust the path as needed

jest.mock('@nestjs/core', () => ({
  NestFactory: {
    create: jest.fn().mockResolvedValue({
      useGlobalPipes: jest.fn(),
      listen: jest.fn().mockResolvedValue(undefined),
    }),
  },
}));

jest.mock('dotenv', () => ({
  config: jest.fn(),
}));

jest.mock('@nestjs/config', () => ({
  ConfigModule: {
    forRoot: jest.fn(),
  },
  ConfigService: jest.fn().mockImplementation(() => ({
    get: jest.fn().mockReturnValue('mock_connection_string'),
  })),
}));

describe('Bootstrap', () => {
  it('should configure environment and start the application', async () => {
    const mockApp = await NestFactory.create(AppModule);
    
    await bootstrap();

    expect(dotenv.config).toHaveBeenCalled();
    expect(NestFactory.create).toHaveBeenCalledWith(AppModule);
    expect(mockApp.useGlobalPipes).toHaveBeenCalledWith(expect.any(ValidationPipe));
    expect(mockApp.listen).toHaveBeenCalledWith(3000);
  });
});

describe('configureEnvironment', () => {
  it('should call dotenv.config', () => {
    configureEnvironment();
    expect(dotenv.config).toHaveBeenCalled();
  });
});
