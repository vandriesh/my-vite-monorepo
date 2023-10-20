import { ConfigService } from './config-service';

describe('configService', () => {
  it('should throw error', () => {
    expect(() => ConfigService.getApiUrl()).toThrowError('variable VITE_API_URL must exist');
  });

  it('should work', () => {
    process.env.VITE_API_URL = 'http://bar.baz';
    expect(ConfigService.getApiUrl()).toEqual('http://bar.baz');
  });
});
